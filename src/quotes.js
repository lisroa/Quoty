import './styles/QuoteStyle.css';

function Quote ({content, id}) {
return (
    <div className="container">
        <p className="quotesContent">
            {content}
        </p>
    </div>
);
}

export default Quote;
