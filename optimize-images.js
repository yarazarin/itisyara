const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/img';
const outputDir = './src/img/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files
const imageFiles = fs.readdirSync(inputDir)
    .filter(file => file.toLowerCase().endsWith('.png'));

async function optimizeImage(file) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
        await sharp(inputPath)
            .resize(800, 600, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .png({
                quality: 80,
                compressionLevel: 9,
                palette: true
            })
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
        
        console.log(`✓ ${file}: Reduced by ${savings}% (${(inputStats.size/1024).toFixed(2)}KB → ${(outputStats.size/1024).toFixed(2)}KB)`);
    } catch (error) {
        console.error(`✗ Error processing ${file}:`, error);
    }
}

async function optimizeAll() {
    console.log('Starting image optimization...\n');
    
    for (const file of imageFiles) {
        await optimizeImage(file);
    }
    
    console.log('\nOptimization complete! Optimized images are in the /src/img/optimized directory.');
}

optimizeAll(); 