import { useState, useRef } from 'react'
import Button from './Button'

const EnrollForm = ({ tracks, onEnroll }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [track, setTrack] = useState(tracks[0] || '')
  const [score, setScore] = useState('')
  const emailRef = useRef(null)
  const activeRef = useRef(null)

  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    const scoreNum = Number(score)
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) newErrors.score = 'Score must be between 0 and 100'
    const email = emailRef.current?.value?.trim() || ''
    if (!email) newErrors.email = 'Email is required'
    else if (!email.includes('@')) newErrors.email = 'Email must contain "@"'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const newStudent = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email,
      track,
      score: scoreNum,
      isActive: activeRef.current?.checked ?? false,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
    }
    onEnroll(newStudent)

    setFirstName('')
    setLastName('')
    setTrack(tracks[0] || '')
    setScore('')
    if (emailRef.current) emailRef.current.value = ''
    if (activeRef.current) activeRef.current.checked = false
    setErrors({})
  }

  const previewName = firstName || lastName ? `${firstName} ${lastName}`.trim() : 'No name'
  const previewTrack = track || 'No track'
  const previewScore = score || '?'
  const hasErrors = Object.keys(errors).length > 0

  return (
    <form className="enroll-form" onSubmit={handleSubmit}>
      <h2>Enroll New Student</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="track">Track *</label>
          <select id="track" value={track} onChange={(e) => setTrack(e.target.value)}>
            {tracks.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="score">Score (0–100) *</label>
          <input id="score" type="number" min="0" max="100" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Score" />
          {errors.score && <span className="error">{errors.score}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (uncontrolled) *</label>
          <input id="email" type="email" defaultValue="" ref={emailRef} placeholder="email@example.com" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
          <label htmlFor="active">Active (uncontrolled)</label>
          <input id="active" type="checkbox" defaultChecked={false} ref={activeRef} />
        </div>
      </div>
      <div className="preview">Preview: {previewName} — {previewTrack} ({previewScore})</div>
      <Button title="Enroll" onClick={handleSubmit} className="btn-primary" disabled={hasErrors} />
    </form>
  )
}
export default EnrollForm
