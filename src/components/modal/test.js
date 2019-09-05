import React, { useState } from 'react'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const initialValue = Plain.deserialize('Hello World')

function test() {
  const [value, setValue] = useState(initialValue)
  return <div className="App">
    <Editor
      value={value}
      onChange={(change) => setValue(change.value)}
    />
  </div>
}

export default test