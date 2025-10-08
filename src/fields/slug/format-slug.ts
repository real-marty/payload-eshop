import type { FieldHook } from 'payload'

const MAX_SLUG_LENGTH = 200

export const formatSlug = (
  val: string,
  maxLength: number = MAX_SLUG_LENGTH,
): string | undefined => {
  if (typeof val !== 'string') return undefined
  let s = val.trim()
  // Normalize and strip diacritics (accents)
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  // Replace any non-letter/number sequences with a single dash (Unicode aware)
  s = s.replace(/[^\p{L}\p{N}]+/gu, '-')
  // Collapse multiple dashes
  s = s.replace(/-+/g, '-')
  // Trim leading/trailing dashes
  s = s.replace(/(^-+)|(-+$)/g, '')
  // Lowercase
  s = s.toLowerCase()
  // Enforce max length
  if (s.length > maxLength) s = s.slice(0, maxLength)
  // Trim again after slicing
  s = s.replace(/(^-+)|(-+$)/g, '')
  return s
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value, MAX_SLUG_LENGTH)
    }

    if (operation === 'create' || data?.slug === undefined) {
      const fallbackData = data?.[fallback]
      if (typeof fallbackData === 'string') {
        return formatSlug(fallbackData, MAX_SLUG_LENGTH)
      }
    }

    return value
  }

// Ensure the slug is unique within its collection by appending a numeric suffix if needed
export const ensureUniqueSlugHook =
  (maxLength: number = MAX_SLUG_LENGTH): FieldHook =>
  async ({ value, req, originalDoc }) => {
    if (!value || typeof value !== 'string') return value
    const collectionSlug = (req as any)?.collection?.slug || (req as any)?.collection?.config?.slug
    if (!collectionSlug || !req?.payload) return value

    const base = value
    let candidate = base
    let i = 1
    const currentId = originalDoc?.id as string | number | undefined

    const isTaken = async (slug: string) => {
      const where: any = { slug: { equals: slug } }
      if (currentId) where.id = { not_equals: currentId }
      const res = await req.payload.find({
        collection: collectionSlug,
        where,
        limit: 1,
        depth: 0,
        overrideAccess: true,
      })
      return Array.isArray((res as any)?.docs) && (res as any).docs.length > 0
    }

    while (await isTaken(candidate)) {
      i += 1
      const suffix = `-${i}`
      const available = maxLength - suffix.length
      const trimmedBase = base.slice(0, Math.max(1, available))
      candidate = `${trimmedBase}${suffix}`
      candidate = formatSlug(candidate, maxLength) || candidate
    }

    return candidate
  }
