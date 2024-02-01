import React from 'react'

type PropType = {
    selected: boolean
    imgSrc: string
    onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, imgSrc, onClick } = props

    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
            <div
                onClick={onClick}
                className="embla-thumbs__slide__button"
            >
                <img
                    className="embla-thumbs__slide__img"
                    src={imgSrc}
                    alt="Your alt text"
                />
            </div>
        </div>
    )
}
