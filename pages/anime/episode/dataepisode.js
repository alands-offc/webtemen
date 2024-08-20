import React from 'react';

export const episodesData = [
    {
        number: 1,
        title: 'Episode 1',
        description: 'Deskripsi episode 1',
        airDate: '2024-01-01',
        animeId: 1, // Sesuaikan dengan ID anime terkait
        servers: [
            { name: 'Google Drive', url: 'https://drive.google.com/file/d/1mo9GPw_LqCgLG2q_UuzmJEobWnHzusXz/preview' },
            { name: 'Mega', url: 'https://mega.nz/embed/EXAMPLE_ID' },
            { name: 'Stream', url: '' },
            { name: 'Acefile', url: '' },
        ],
    },
    // Episode lainnya
];

const DataEpisode = () => {
    return (
        <div>
            <h1>Data Episode</h1>
            {/* Render data episode */}
        </div>
    );
};

export default DataEpisode;
