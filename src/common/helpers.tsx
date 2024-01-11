export const convertBreaks = str =>
  str.split(/<br\s*\/?>/).reduce((prev, curr, i) => {
    const key = `_${Math.random().toString(36).substring(2, 9)}`
    return [...prev, i > 0 && <br key={key} />, curr]
  }, [])
