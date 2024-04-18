export function removeAccents(string: string) {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s,]/g, "");
}

export function normalizeString(string: string) {
  return removeAccents(string)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
