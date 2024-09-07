import Button from './components/Button'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={
          ' flex flex-col min-h-screen w-full items-center font-tt-norms'
        }
      >
        <Button
          label='Clique aqui'
          type={'secondary'}
          onClick={() => alert('Clicou')}
        />
      </main>
    </>
  )
}
