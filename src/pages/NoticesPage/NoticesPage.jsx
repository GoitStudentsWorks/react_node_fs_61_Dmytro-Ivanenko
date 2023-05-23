import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import Pagination from 'shared/components/Pagination';
import Loader from 'shared/components/Loader/Loader';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters';
import AddPetButton from 'components/AddPetButton';
import SelectedFilters from 'components/SelectedFilters';
import Placeholder from 'shared/components/Placeholder';

import { getFilterValues } from './filter';
import { getNotices, applySearchParams } from 'shared/helpers';
import { useAuth } from 'shared/hooks/useAuth';

import styles from './notices-page.module.scss';

const PER_PAGE = 12;

const NoticesPage = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoggedIn } = useAuth();

    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);
    const query = searchParams.get('query');
    const gender = searchParams.get('gender');
    const age = searchParams.get('age');

    useEffect(() => {
        setIsLoading(true);

        const path = pathname.split('/');
        const category = path[path.length - 1];

        // should prevent unwanted behavior
        if ((category === 'favorite' && !isLoggedIn) || (category === 'own' && !isLoggedIn)) {
            return;
        }

        if (prevPathname.current !== pathname) {
            // reset pagination for category change
            prevPathname.current = pathname;
            setCurrentPage(1);
        }

        const getApiNotices = async () => {
            try {
                const { pets, total } = await getNotices({
                    category,
                    query,
                    gender,
                    page: currentPage,
                    limit: PER_PAGE,
                    age,
                });
                console.log(pets);

                if (total === 0) {
                    setItems([]);
                    setPageCount(0);
                    setCurrentPage(1);
                    setIsLoading(false);
                    return;
                }

                setPageCount(Math.ceil(total / PER_PAGE));
                setItems(pets);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getApiNotices();
    }, [currentPage, pathname, query, gender, age, isLoggedIn]);

    const handleFilterChange = target => {
        setCurrentPage(1);
        applySearchParams(target, searchParams, setSearchParams);
    };

    const handleFilterReset = value => {
        setCurrentPage(1);

        if (value === 'male' || value === 'female') {
            searchParams.delete('gender');
            setSearchParams(searchParams);
            return;
        }

        searchParams.delete('age');
        setSearchParams(searchParams);
    };

    const handleSubmit = ({ query }) => {
        searchParams.set('query', query);
        setSearchParams(searchParams);
        setCurrentPage(1);
    };

    const handlePageClick = e => {
        setCurrentPage(e.selected + 1);
    };

    const handleClear = () => {
        searchParams.delete('query', query);
        setSearchParams(searchParams);
        setCurrentPage(1);
    };

    const filters = getFilterValues(searchParams);

    return (
        <div className={styles.container}>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm onSubmit={handleSubmit} onClear={handleClear} />
            </div>
            <div className={styles.controls}>
                <NoticesCategoriesNav searchParams={searchParams} />
                <div className={styles.wrapper}>
                    <div className={styles.buttonWrapper}>
                        <NoticesFilters filters={filters} onFilter={handleFilterChange} />
                        <AddPetButton />
                    </div>
                    {filters.length > 0 && <SelectedFilters filters={filters} handleReset={handleFilterReset} />}
                </div>
            </div>

            {isLoading && <Loader />}
            <Outlet context={items} />
            {items.length === 0 && !isLoading && <Placeholder text={'Oops! Nothing found.'} />}
            {pageCount > 1 && (
                <Pagination onPageClick={handlePageClick} pageCount={pageCount} currentPage={currentPage} />
            )}
        </div>
    );
};

export default NoticesPage;
