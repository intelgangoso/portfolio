import {formatDate} from '@/utils/functions';

export default function PortfolioCard({portfolio}) {
    return (
        <>
            <div className="card bg-light subtle-shadow">
                <div className="card-body">
                    <h3 className="card-title">{portfolio.title}</h3>
                    <h4 className="card-subtitle mb-2 text-muted">{portfolio.jobTitle}</h4>
                    <p className="card-text fs-2">{portfolio.description}</p>
                </div>
                <div className="card-footer bg-light">
                    <small className="text-muted">{formatDate(portfolio.startDate)} - {(portfolio.endDate && formatDate(portfolio.endDate)) || 'Present'}</small>
                </div>
            </div>
        </>
    )
}