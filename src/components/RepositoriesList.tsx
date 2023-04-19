
import { useState, FormEvent } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions()


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term)
  }

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button> Search </button>
    </form>
  </div>
}

export default RepositoriesList;