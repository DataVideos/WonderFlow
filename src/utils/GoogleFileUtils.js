const filename2url = {
    'supp.zip': 'https://drive.google.com/file/d/1KovSGnsM9Zb3_Tqaed4jo8joYBT6CE7H/view?usp=sharing',

    'V1_1.mp4': 'https://drive.google.com/file/d/1_Au1giEWhBaqqvgv-LtmmnT4B8bphArQ/view?usp=sharing',
    'V1_2.mp4': 'https://drive.google.com/file/d/1RSXZxkwKeCovLiOYmBUE6TcDWWFE9Upg/view?usp=sharing',
    'V2_1.mp4': 'https://drive.google.com/file/d/1tRfCTxBP_kxC99oAC16snZI4Ozh5p4rA/view?usp=sharing',
    'V2_2.mp4': 'https://drive.google.com/file/d/1tcHxPZ3uU1K7jw1tgDqY_p4Z5n54NVtK/view?usp=sharing',
    'V3_1.mp4': 'https://drive.google.com/file/d/1e_MGsByJdF6VicnV10Ljr7OIYT8uwxy4/view?usp=sharing',
    'V3_2.mp4': 'https://drive.google.com/file/d/1DNQQVxdjJAigjCQLX2v7YAvNXWmo7Hbz/view?usp=sharing',
    'V4_1.mp4': 'https://drive.google.com/file/d/1gZog07LO-M6QT49N6Y4AAloHI6E6OZbH/view?usp=sharing',
    'V4_2.mp4': 'https://drive.google.com/file/d/1win_PF9o-UPQWu3p2b-rojA6J3frh1TW/view?usp=sharing',
    'V5_1.mp4': 'https://drive.google.com/file/d/19x4wtc7x0PSbR07JQdQlTmpOug7aZowD/view?usp=sharing',
    'V5_2.mp4': 'https://drive.google.com/file/d/1HB2cC6N8uWv-m6-_cN5PHMMeJ-NRfrEU/view?usp=sharing',
    'V6_1.mp4': 'https://drive.google.com/file/d/1zKICsWrtXdvBe5IC3lJ5LwQbcbvrmtSH/view?usp=sharing',
    'V6_2.mp4': 'https://drive.google.com/file/d/1jhlyRx9WQZKvWH-o4CXoC6V4hhoKOEW5/view?usp=sharing',
    'V7_1.mp4': 'https://drive.google.com/file/d/19i11feiXa7dP8hqKsCh2Y1D89crm9oNw/view?usp=sharing',
    'V7_2.mp4': 'https://drive.google.com/file/d/19WqHbO3fDB2ttOMqN7GQbrxy4mBrqNFa/view?usp=sharing',
    'V8_1.mp4': 'https://drive.google.com/file/d/1ZyTI2cm_vhfCvDwtJlbo-WlzmOJ01WIq/view?usp=sharing',
    'V8_2.mp4': 'https://drive.google.com/file/d/1VMm4RKjUyyje4hNBHOetdZbRrAtlAG16/view?usp=sharing',
    'V9_1.mp4': 'https://drive.google.com/file/d/1gTISuZGMsCaag3bOzQSJluvMITWTUYaB/view?usp=sharing',
    'V9_2.mp4': 'https://drive.google.com/file/d/1lYH_wclBI2UivdoCUVQESF2UzBbHXV8D/view?usp=sharing',
    'V10_1.mp4': 'https://drive.google.com/file/d/1HmYMrJdjHWcMa2PcddVAzIW3O5CdL0K-/view?usp=sharing',
    'V10_2.mp4': 'https://drive.google.com/file/d/1vk2QRauCF5lU62sf5hFVOnxEifCJdgys/view?usp=sharing',
    'V11_1.mp4': 'https://drive.google.com/file/d/1aszuGy5R_1zVvTFVbuddUaQeazluQdlm/view?usp=sharing',
    'V11_2.mp4': 'https://drive.google.com/file/d/13RTT3B2Eavd3UpsmBAjur9P1Dn6Ljidt/view?usp=sharing',

    'WonderFlow_video.mp4': 'https://drive.google.com/file/d/1ehQCTuz_5V2zr3tR7eziuZRkfOuQ4k4K/view?usp=sharing',
}

export const getGoogleDriveFileUrl = (filename) => {
    return filename2url[filename];
}

export const  getGoogleDriveVideoPreviewUrl = (filename) => {
    const url = getGoogleDriveFileUrl(filename);
    return url.replace('view?usp=sharing', 'preview');
}

export const getFileDownloadUrl = (filename) => {
    const fileId = filename2url[filename].split('/')[5];
    return `https://drive.usercontent.google.com/download?id=${fileId}&confirm=xxx`;
}