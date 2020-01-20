import Link from 'next/link'
import Route from 'next/router'

export default () => {
  function goToB() {
    Route.push('/b')
  }
  return (
    <>
      <Link href="/b">
        <button>a</button>
      </Link>
      <button onClick={goToB}>goto b</button>
    </>
  )
}