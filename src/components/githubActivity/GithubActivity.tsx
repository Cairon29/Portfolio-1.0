import './githubActivity-styles.css'

export const GithubActivity = () => {
  return (
    <section id="github-activity">
        <div id="github-chart-title">
            <h3>Activity logs</h3>
            <button>Visit github</button>
        </div>
        <article id="github-chart-article">
            <div id="github-chart"></div>
        </article>
        <div id="github-chart-legend">
            <span>x activities in 2020</span>
            <span>less to more</span>
        </div>
    </section>
  )
}
