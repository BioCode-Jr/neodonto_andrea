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
          variant={'grid'}
          onClick={() => alert('Clicou')}
          icon={
            <svg
              width='100px'
              height='100px'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
                fill='#000000'
              />
            </svg>
          }
          column={1}
        />
        <Button
          label='Clique aqui'
          variant={'grid'}
          onClick={() => alert('Clicou')}
          column={2}
        />
        <Button
          label='Clique aqui'
          variant={'grid'}
          onClick={() => alert('Clicou')}
          column={3}
        />
        <Button
          label='Clique aqui'
          variant={'grid'}
          onClick={() => alert('Clicou')}
          column={4}
        />

        <Button
          label='Clique aqui'
          variant={'primary'}
          onClick={() => alert('Clicou')}
          icon={
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
                fill='#000000'
              />
            </svg>
          }
        />
      </main>
    </>
  )
}
