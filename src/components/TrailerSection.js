import React from 'react'

export default function TrailerSection() {
    return (
        <div>
            <div className="trailer-section">
                <h1>Trailer</h1>
                <hr/>
                <div class="card text-center trailer-top">
                    <iframe width="100%" height="400"
                    src="https://www.youtube.com/embed/7iZ3TjJxVp4">
                    </iframe>
                </div>
                <div class="card-deck">
                    <div class="card">
                    <iframe width="100%" height="200"
                        src="https://www.youtube.com/embed/yGY484EPe5U">
                    </iframe>
                    <div class="card-footer">
                        <small class="text-muted">Wonder woman 2</small>
                    </div>
                    </div>
                    <div class="card">
                    <iframe width="100%" height="200"
                        src="https://www.youtube.com/embed/a5SxyQ-9YDA">
                    </iframe>
                    <div class="card-footer">
                        <small class="text-muted">Jame Bond 007</small>
                    </div>
                    </div>
                    <div class="card">
                    <iframe width="100%" height="200"
                        src="https://www.youtube.com/embed/D3EdI6G2tF4">
                    </iframe>
                    <div class="card-footer">
                        <small class="text-muted">Coronavirus</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
