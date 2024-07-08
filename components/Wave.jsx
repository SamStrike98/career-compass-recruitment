

const Wave = ({ colour = '#0099ff', isTop = true }) => {
    if (isTop) {
        return (
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="object-top" fill={`${colour}`} fillOpacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        )
    } else return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={`${colour}`} fillOpacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    )
}

export default Wave