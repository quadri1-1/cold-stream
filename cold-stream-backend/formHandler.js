const express = require('express');
const xlsx = require('xlsx');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

app.use(express.json());

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from this origin
}));

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Create an Excel file
    let workbook;
    try {
        workbook = xlsx.readFile('data.xlsx');
    } catch (error) {
        workbook = xlsx.utils.book_new();
    }
    let sheet = workbook.Sheets['OnlineRentalApplication'];
    if (!sheet) {
        sheet = xlsx.utils.aoa_to_sheet([['Timestamp', 'Property of Interest', 'First Name', 'Last Name', 'Street Address', 'Address Line 2', 'City', 'State', 'Zip Code', 'Phone', 'Email address', 'Contact Preference', 'Property Type', 'Rental area', 'Number of Bedrooms', 'Number of occupants', 'Landlord Reference', 'Pets', 'Landlord Eviction', 'Smoking Compliance', 'Reason for move', 'Employment length', 'Total Household Monthly Income', 'Background Information']]);
        xlsx.utils.book_append_sheet(workbook, sheet, 'OnlineRentalApplication');
    }

    const newRow = [
        new Date().toISOString(),
        formData.propertyInterest,
        formData.firstName,
        formData.lastName,
        formData.streetAddress,
        formData.addressLine2,
        formData.city,
        formData.state,
        formData.zipCode,
        formData.phone,
        formData.email,
        formData.contactPreference,
        formData.propertyType,
        formData.rentalArea,
        formData.bedrooms,
        formData.occupants,
        formData.landlordReference,
        formData.pets,
        formData.landlordJudgment,
        formData.smokingCompliance,
        formData.reasonForMove,
        formData.employmentLength,
        formData.monthlyIncome,
        formData.backgroundInfo,
    ];

    xlsx.utils.sheet_add_aoa(sheet, [newRow], { origin: -1 });
    xlsx.writeFile('RentalApplication.xlsx', workbook);

    res.send('Success');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
