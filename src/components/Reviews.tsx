import { Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Review {
    name: string;
    photo: string;
    title: string;
    review: string;
    rating: number;
}

const Reviews = () => {
    const { t } = useLanguage();

    // Placeholder reviews - you can easily replace these with real ones
    const reviews: Review[] = [
        {
            name: "Gonçalo Ferreira",
            photo: "/reviews/placeholder1.jpg",
            title: t('reviews.review1.title'),
            review: t('reviews.review1.text'),
            rating: 5
        },
        {
            name: "Zarine Sousa",
            photo: "/reviews/placeholder2.jpg",
            title: t('reviews.review2.title'),
            review: t('reviews.review2.text'),
            rating: 5
        },
        {
            name: "Mauro Costa da Silva",
            photo: "/reviews/placeholder3.jpg",
            title: t('reviews.review3.title'),
            review: t('reviews.review3.text'),
            rating: 5
        },
        {
            name: "Chloe Loizou",
            photo: "/reviews/placeholder4.jpg",
            title: t('reviews.review4.title'),
            review: t('reviews.review4.text'),
            rating: 5
        },
        {
            name: "Qays Al-Haussan",
            photo: "/reviews/placeholder5.jpg",
            title: t('reviews.review5.title'),
            review: t('reviews.review5.text'),
            rating: 5
        },
        {
            name: "Eliud Kamau",
            photo: "/reviews/placeholder6.jpg",
            title: t('reviews.review6.title'),
            review: t('reviews.review6.text'),
            rating: 5
        }
    ];

    const renderStars = (rating: number) => {
        return (
            <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        className={i < rating ? 'star-filled' : 'star-empty'}
                        fill={i < rating ? 'currentColor' : 'none'}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="section reviews-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">{t('reviews.title')}</h2>
                    <p className="section-subtitle">{t('reviews.subtitle')}</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    className="review-photo"
                                    onError={(e) => {
                                        // Fallback to a colored circle with initials if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="review-photo-fallback hidden">
                                    {review.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="review-info">
                                    <h4 className="review-name">{review.name}</h4>
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                            <h5 className="review-title">{review.title}</h5>
                            <p className="review-text">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
