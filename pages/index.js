import cowsay from 'cowsay-browser'

export default () => (
  <pre>
    {cowsay.say({ text: 'hi there! you might want to come back later when more has been done...' })}
  </pre>
)
