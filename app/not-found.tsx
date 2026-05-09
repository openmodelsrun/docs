export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>404: Page Not Found</h1>
      <p style={{ marginTop: '1rem' }}>The page you are looking for does not exist.</p>
    </div>
  )
}
