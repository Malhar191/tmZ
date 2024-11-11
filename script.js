function showPositionDetails(positionId) {
    const positionDetailsSection = document.getElementById('positionDetails');

    // Define the position details object with specific committee roles
    const positionDetails = {
        'placement-president': {
            title: 'President - Placement Committee',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li>Lead and manage all activities within the Placement Committee.</li>
                    <li>Establish and maintain strong relations with recruiting companies.</li>
                    <li>Coordinate placement-related events and workshops for students.</li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li>Excellent leadership and organizational skills.</li>
                    <li>Prior experience in team management or event organization.</li>
                    <li>Effective communication and interpersonal skills.</li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47'
        },
        'placement-vp': {
            title: 'Vice-President - Placement Committee',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li>Support the President in executing placement activities.</li>
                    <li>Assist in managing committee operations and coordinating with companies.</li>
                    <li>Oversee sub-committees and ensure smooth execution of events.</li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li>Strong organizational skills and ability to multitask.</li>
                    <li>Experience in team coordination or event planning is a plus.</li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47'
        },
        'eic-president': {
            title: 'President - Entrepreneurship & Innovation Council',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li>Lead the council in promoting entrepreneurial activities on campus.</li>
                    <li>Organize events and workshops with industry leaders and innovators.</li>
                    <li>Foster a community of aspiring entrepreneurs and innovators.</li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li>Passion for entrepreneurship and innovation.</li>
                    <li>Experience in event management or leadership roles preferred.</li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47'
        },
        // Add more position details for each committee and role as needed
    };

    // Get details for the selected position
    const position = positionDetails[positionId];

    // Populate the details section
    if (position) {
        positionDetailsSection.innerHTML = `
            <h2>${position.title}</h2>
            ${position.description}
            <a href="${position.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
        `;
    } else {
        positionDetailsSection.innerHTML = '<p>Position details not available.</p>';
    }
}
