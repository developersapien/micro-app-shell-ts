import React from 'react'
import Example from '@components/Example'
import './styles.css'
const ExampleMFE = React.lazy(() => import('example/ExampleIndex'))
const App = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <div className="text-5xl absolute w-[762px] bg-indigo-50">
        <Example />
        <ExampleMFE />
      </div>
      ]
    </React.Suspense>
  )
}

export default App
