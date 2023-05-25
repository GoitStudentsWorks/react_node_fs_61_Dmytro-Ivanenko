import styles from './addPetForm.module.scss';
import { ReactComponent as PlusIcon } from 'images/icons/photo-plus.svg';
import { useRef, useEffect } from 'react';

const PetThreeStepFormContent = ({ data, setData, fileInputRef }) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        let input = document.querySelector('#photo');
        input.classList.contains('notValidPhoto') && input.classList.remove('notValidPhoto');
    }, [fileInputRef.current]);

    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    const getphotoURL = () => URL.createObjectURL(fileInputRef.current.files[0]);

    const focusHandle = e => {
        let input = document.querySelector(`#${e.target.name}`);
        input.classList.contains('notValid') && input.classList.remove('notValid');
    };

    return (
        <div className={styles.petThirdStepInputs}>
            <label id="photo" className={styles.petPhotoLabel}>
                Add photo
                <PlusIcon className={styles.petPhotoPlusIcon} />
                <input
                    type="file"
                    required
                    value={data.photo ?? ''}
                    ref={fileInputRef}
                    name="photo"
                    alt="pet`s photo"
                    onChange={handleChange}
                    className={styles.photoInput}
                    onFocus={focusHandle}
                />
                {fileInputRef.current?.files[0] && (
                    <img className={styles.petPhotoPreview} src={getphotoURL()} alt="pet preview"></img>
                )}
            </label>

            <label id="comments" className={styles.petLabel}>
                Comments
                <textarea
                    type="text"
                    required
                    value={data.comments ?? ''}
                    name="comments"
                    onChange={handleChange}
                    className={styles.textArea}
                    placeholder="Field is required"
                    onFocus={focusHandle}
                />
            </label>
        </div>
    );
};
export default PetThreeStepFormContent;
