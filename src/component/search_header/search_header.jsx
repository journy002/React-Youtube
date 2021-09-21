import styles from './search_header.module.css';
import React, {useRef, memo} from 'react';

const SearchHeader = memo(
    ({ onSearch }) =>  {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            // 먼저 input의 값을 읽고 컴포넌트 안에서 검색을 할 수 있는게 아니라 검색하는 것을 props로 받아와야 한다.
            onSearch(value);
        }
    
        const onClick = () => {
            handleSearch();
        }
    
        const onKeyPress = (event) => {
            if(event.key === 'Enter') {
                handleSearch();
            }
        }
    
        return(
            <header className={styles.header} >
                <div className={styles.logo} >
                    <img className={styles.img} src="/images/logo.png" alt="logo"/>
                    <h1 className={styles.title} >Youtube</h1>
                </div>
                <input
                    ref={inputRef}
                    className={styles.input} 
                    type="search" 
                    placeholder='Search...' 
                    onKeyPress={onKeyPress} 
                />
                <button className={styles.button} type='submit' onClick={onClick} >  {/* button은 input과 함께 쓰이기 때문에 타입을 서밋으로 지정해줘야한다 */}
                    <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
                </button>
            </header>
        )
    }
)

export default SearchHeader;