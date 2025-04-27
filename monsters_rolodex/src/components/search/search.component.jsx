import './search.styles.css'

const Search = ({ onChangeHandler }) => {
    return <input className='search' type='search' onChange={ onChangeHandler }/>
}

export default Search