'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Briefcase, Building2, CalendarClock, CheckCircle2, CircleAlert, Clock3, FileText, Laptop2, Search, ShieldCheck, Users } from 'lucide-react'

type AttendanceStatus = 'On site' | 'Remote' | 'Late' | 'On leave'
type WorkView = 'Attendance' | 'Directory' | 'HRD queue'

type EmployeeRecord = {
  id: string
  team: string
  role: string
  shift: string
  status: AttendanceStatus
  checkIn: string
  initials: string
}

const employees: EmployeeRecord[] = [
  { id: 'EMP-041', team: 'Operations', role: 'Shift lead', shift: '06:00–14:00', status: 'On site', checkIn: '06:02', initials: '41' },
  { id: 'EMP-052', team: 'People Ops', role: 'HR coordinator', shift: '08:00–16:00', status: 'Remote', checkIn: '07:56', initials: '52' },
  { id: 'EMP-063', team: 'Field Services', role: 'Service associate', shift: '07:00–15:00', status: 'On site', checkIn: '06:54', initials: '63' },
  { id: 'EMP-077', team: 'Engineering', role: 'Systems analyst', shift: '09:00–17:00', status: 'Late', checkIn: '09:18', initials: '77' },
  { id: 'EMP-081', team: 'Finance', role: 'Finance associate', shift: '08:30–16:30', status: 'On leave', checkIn: '—', initials: '81' },
  { id: 'EMP-093', team: 'Customer Care', role: 'Support specialist', shift: '10:00–18:00', status: 'Remote', checkIn: '09:52', initials: '93' },
  { id: 'EMP-104', team: 'Office Services', role: 'Office coordinator', shift: '08:00–16:00', status: 'On site', checkIn: '07:48', initials: '04' },
  { id: 'EMP-118', team: 'Logistics', role: 'Dispatch planner', shift: '07:00–15:00', status: 'On leave', checkIn: '—', initials: '18' },
]

const views: WorkView[] = ['Attendance', 'Directory', 'HRD queue']
const statusFilters = ['All status', 'On site', 'Remote', 'Late', 'On leave'] as const

const hrQueue = [
  { ref: 'REQ-008', type: 'ANNUAL LEAVE', employee: 'EMP-081', detail: '2 days · sample request', status: 'Awaiting review' },
  { ref: 'REQ-012', type: 'SHIFT UPDATE', employee: 'EMP-063', detail: 'Schedule adjustment · sample', status: 'Needs confirmation' },
  { ref: 'REQ-015', type: 'ONBOARDING', employee: 'EMP-124', detail: 'Checklist · synthetic record', status: 'In progress' },
]

function statusClass(status: AttendanceStatus) {
  return status.toLowerCase().replaceAll(' ', '-')
}

export function WorkforceOperationsHub() {
  const [view, setView] = useState<WorkView>('Attendance')
  const [statusFilter, setStatusFilter] = useState<(typeof statusFilters)[number]>('All status')
  const [query, setQuery] = useState('')

  const filteredEmployees = useMemo(() => employees.filter((employee) => {
    const matchesStatus = statusFilter === 'All status' || employee.status === statusFilter
    const searchable = `${employee.id} ${employee.team} ${employee.role}`.toLowerCase()
    return matchesStatus && searchable.includes(query.trim().toLowerCase())
  }), [query, statusFilter])

  const counts = useMemo(() => ({
    site: employees.filter((employee) => employee.status === 'On site').length,
    remote: employees.filter((employee) => employee.status === 'Remote').length,
    late: employees.filter((employee) => employee.status === 'Late').length,
    leave: employees.filter((employee) => employee.status === 'On leave').length,
  }), [])

  return (
    <div className="work-ops">
      <header className="work-page-heading">
        <div>
          <span className="work-kicker"><i /> R!OT OPS / PEOPLE SYSTEMS</span>
          <h1>PEOPLE, <em>RHYTHM,</em> WORK</h1>
          <p>A privacy-first office workspace for employee directory, attendance overview, and everyday HRD coordination.</p>
        </div>
        <div className="work-demo-badge"><span>SYNTHETIC DATA</span><b>NO LIVE EMPLOYEES</b><small>Sample records · no real clocking</small></div>
      </header>

      <section className="work-overview" aria-label="Sample work and attendance overview">
        <div className="work-overview-copy"><span className="work-index">00 / TODAY'S SAMPLE SNAPSHOT</span><h2>People operations, in one view</h2><p>Attendance and HRD indicators below are fictional and for interface demonstration only.</p><span className="work-snapshot-tag"><ShieldCheck aria-hidden="true" /> PRIVACY-SAFE DEMO</span></div>
        <div className="work-kpi-grid">
          <article><span>SAMPLE EMPLOYEES</span><strong>{employees.length.toString().padStart(2, '0')}</strong><small>synthetic directory</small></article>
          <article><span>ON SITE</span><strong>{counts.site.toString().padStart(2, '0')}</strong><small>sample check-ins</small></article>
          <article><span>REMOTE</span><strong>{counts.remote.toString().padStart(2, '0')}</strong><small>sample schedule</small></article>
          <article><span>HRD QUEUE</span><strong>{hrQueue.length.toString().padStart(2, '0')}</strong><small>demo requests</small></article>
        </div>
      </section>

      <div className="work-view-switch" role="group" aria-label="Workforce workspace view">
        {views.map((item) => <button type="button" key={item} className={view === item ? 'active' : ''} aria-pressed={view === item} onClick={() => setView(item)}>{item === 'Attendance' ? <Clock3 aria-hidden="true"/> : item === 'Directory' ? <Users aria-hidden="true"/> : <FileText aria-hidden="true"/>}{item}</button>)}
        <span className="work-view-note"><CircleAlert aria-hidden="true"/> DEMO SNAPSHOT / NOT LIVE</span>
      </div>

      {view !== 'HRD queue' && <div className="work-toolbar">
        <label className="work-search"><Search aria-hidden="true"/><span className="sr-only">Search sample employees by ID, team, or role</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search employee ID, team, role…" /></label>
        {view === 'Attendance' && <div className="work-status-filter" role="group" aria-label="Filter sample attendance by status">{statusFilters.map((status) => <button type="button" key={status} className={statusFilter === status ? 'active' : ''} aria-pressed={statusFilter === status} onClick={() => setStatusFilter(status)}>{status}</button>)}</div>}
        <span className="work-record-count">{filteredEmployees.length.toString().padStart(2, '0')} SAMPLE RECORDS</span>
      </div>}

      {view === 'Attendance' && <section className="work-content-grid" aria-label="Attendance sample dashboard">
        <div className="work-panel work-attendance-panel">
          <div className="work-section-heading"><div><span className="work-index">01 / TIME & PRESENCE</span><h2>Attendance overview</h2><p>Illustrative shift and check-in states</p></div><span className="work-sample-chip"><i /> FICTIONAL DATA</span></div>
          <div className="work-status-strip" aria-label="Sample attendance status totals">
            <span><i className="work-dot work-dot-onsite"/> On site <b>{counts.site.toString().padStart(2, '0')}</b></span>
            <span><i className="work-dot work-dot-remote"/> Remote <b>{counts.remote.toString().padStart(2, '0')}</b></span>
            <span><i className="work-dot work-dot-late"/> Late <b>{counts.late.toString().padStart(2, '0')}</b></span>
            <span><i className="work-dot work-dot-leave"/> Leave <b>{counts.leave.toString().padStart(2, '0')}</b></span>
          </div>
          <div className="work-table-wrap"><table className="work-employee-table"><thead><tr><th scope="col">EMPLOYEE</th><th scope="col">TEAM / ROLE</th><th scope="col">SHIFT</th><th scope="col">STATUS</th><th scope="col">SAMPLE IN</th></tr></thead><tbody>
            {filteredEmployees.map((employee) => <tr key={employee.id}><td><span className="work-employee-id"><i>{employee.initials}</i><b>{employee.id}</b></span></td><td><span className="work-team-role"><b>{employee.team}</b><small>{employee.role}</small></span></td><td className="work-shift-cell">{employee.shift}</td><td><span className={`work-attendance-status work-status-${statusClass(employee.status)}`}>{employee.status}</span></td><td className="work-checkin-cell">{employee.checkIn}</td></tr>)}
            {filteredEmployees.length === 0 && <tr><td colSpan={5} className="work-empty-state">No sample employee records match these filters.</td></tr>}
          </tbody></table></div>
          <div className="work-table-foot"><span><ShieldCheck aria-hidden="true"/> Identifiers are fictional; no real attendance data is connected.</span><span>LOCAL PREVIEW</span></div>
        </div>
        <aside className="work-side-stack">
          <section className="work-panel work-shift-panel"><div className="work-section-heading"><div><span className="work-index">02 / OFFICE COVERAGE</span><h2>Work mode mix</h2></div><Building2 aria-hidden="true"/></div><div className="work-coverage-list"><div><span>Office / on site</span><b>{counts.site} / {employees.length}</b><i><em style={{ width: `${(counts.site / employees.length) * 100}%` }}/></i></div><div><span>Remote schedule</span><b>{counts.remote} / {employees.length}</b><i><em style={{ width: `${(counts.remote / employees.length) * 100}%` }}/></i></div><div><span>Leave / away</span><b>{counts.leave} / {employees.length}</b><i><em style={{ width: `${(counts.leave / employees.length) * 100}%` }}/></i></div></div><p className="work-side-note"><Laptop2 aria-hidden="true"/> Sample work-mode distribution</p></section>
          <section className="work-privacy-panel"><div><ShieldCheck aria-hidden="true"/><span>PRIVACY BY DEFAULT</span></div><p>No location tracking, biometric checks, or personal identifiers in this prototype.</p></section>
        </aside>
      </section>}

      {view === 'Directory' && <section className="work-panel work-directory-panel" aria-label="Sample employee directory"><div className="work-section-heading"><div><span className="work-index">01 / EMPLOYEE DIRECTORY</span><h2>People & teams</h2><p>Searchable synthetic records with role and shift context only.</p></div><span className="work-sample-chip"><i /> NO REAL PROFILES</span></div><div className="work-directory-grid">{filteredEmployees.map((employee) => <article className="work-directory-card" key={employee.id}><span className="work-directory-avatar">{employee.initials}</span><div className="work-directory-meta"><span>{employee.id}</span><h3>{employee.team}</h3><p>{employee.role}</p><small><CalendarClock aria-hidden="true"/>{employee.shift}</small></div><span className={`work-attendance-status work-status-${statusClass(employee.status)}`}>{employee.status}</span></article>)}{filteredEmployees.length === 0 && <p className="work-empty-state">No sample employee records match your search.</p>}</div></section>}

      {view === 'HRD queue' && <section className="work-content-grid work-hrd-grid" aria-label="HRD workflow sample queue"><div className="work-panel work-queue-panel"><div className="work-section-heading"><div><span className="work-index">01 / PEOPLE OPERATIONS</span><h2>HRD review queue</h2><p>Fictional workflow cards with no personal notes.</p></div><span className="work-sample-chip"><i /> SAMPLE ONLY</span></div><div className="work-queue-list">{hrQueue.map((item) => <article className="work-queue-card" key={item.ref}><span className="work-queue-icon">{item.type === 'ANNUAL LEAVE' ? <CalendarClock aria-hidden="true"/> : item.type === 'SHIFT UPDATE' ? <Clock3 aria-hidden="true"/> : <CheckCircle2 aria-hidden="true"/>}</span><div className="work-queue-content"><div className="work-queue-topline"><span>{item.ref}</span><b>{item.type}</b></div><h3>{item.employee}</h3><p>{item.detail}</p><span className="work-queue-review"><CircleAlert aria-hidden="true"/>{item.status}</span></div><ArrowUpRight className="work-queue-arrow" aria-hidden="true"/></article>)}</div></div><aside className="work-side-stack"><section className="work-panel work-shift-panel"><div className="work-section-heading"><div><span className="work-index">02 / HRD ROUTINES</span><h2>Coordination lanes</h2></div><Briefcase aria-hidden="true"/></div><div className="work-routine-list"><div><span>Leave & schedule changes</span><b>REVIEW</b></div><div><span>Onboarding checklists</span><b>TRACK</b></div><div><span>Policy acknowledgements</span><b>DOCUMENT</b></div></div></section><section className="work-privacy-panel"><div><ShieldCheck aria-hidden="true"/><span>HUMAN REVIEW REQUIRED</span></div><p>These cards do not approve leave or make employment decisions. A real workflow needs authorized HR review.</p></section></aside></section>}

      <footer className="work-disclaimer"><CircleAlert aria-hidden="true"/><p><b>Prototype notice:</b> Employee IDs, schedules, check-ins, and requests are synthetic sample data. This module is not connected to a clock-in system, HR database, or live office location service.</p></footer>
    </div>
  )
}
