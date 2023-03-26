import { InputHTMLAttributes, useState, useEffect } from 'react'

const DebouncedSearchInput = ({
  value: initialValue,
  onChange,
  debounce = 100,
  ...props
}: {
  value: string
  onChange: (value: string) => void
  debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default DebouncedSearchInput
