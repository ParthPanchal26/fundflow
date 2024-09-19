import React from 'react';
import './IdeaTable.css'; // Ensure this file is correctly imported
import { useState } from 'react';



const IdeaTable = () => {
    // Hardcoded ideas for testing
    const [ideas] = useState([
        { id: 1, organization: 'Org1', title: 'Idea 1', category: 'Cat1', psNumber: 'PS1', submittedIdeasCount: 5, theme: 'Theme1' },
        { id: 2, organization: 'Org2', title: 'Idea 2', category: 'Cat2', psNumber: 'PS2', submittedIdeasCount: 3, theme: 'Theme2' },
        { id: 3, organization: 'Org3', title: 'Idea 3', category: 'Cat3', psNumber: 'PS3', submittedIdeasCount: 4, theme: 'Theme3' },
        { id: 4, organization: 'Org4', title: 'Idea 4', category: 'Cat4', psNumber: 'PS4', submittedIdeasCount: 2, theme: 'Theme4' },
        { id: 5, organization: 'Org5', title: 'Idea 5', category: 'Cat5', psNumber: 'PS5', submittedIdeasCount: 6, theme: 'Theme5' },
        { id: 6, organization: 'Org6', title: 'Idea 6', category: 'Cat6', psNumber: 'PS6', submittedIdeasCount: 7, theme: 'Theme6' },
        { id: 7, organization: 'Org7', title: 'Idea 7', category: 'Cat7', psNumber: 'PS7', submittedIdeasCount: 8, theme: 'Theme7' },
        { id: 8, organization: 'Org8', title: 'Idea 8', category: 'Cat8', psNumber: 'PS8', submittedIdeasCount: 1, theme: 'Theme8' },
        { id: 9, organization: 'Org9', title: 'Idea 9', category: 'Cat9', psNumber: 'PS9', submittedIdeasCount: 5, theme: 'Theme9' },
        { id: 10, organization: 'Org10', title: 'Idea 10', category: 'Cat10', psNumber: 'PS10', submittedIdeasCount: 6, theme: 'Theme10' },
        { id: 11, organization: 'Org11', title: 'Idea 11', category: 'Cat11', psNumber: 'PS11', submittedIdeasCount: 3, theme: 'Theme11' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const ideasPerPage = 10;
    const [expandedRow, setExpandedRow] = useState(null);

    // Filter and paginate ideas
    const filteredIdeas = ideas.filter(idea =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const indexOfLastIdea = currentPage * ideasPerPage;
    const indexOfFirstIdea = indexOfLastIdea - ideasPerPage;
    const currentIdeas = filteredIdeas.slice(indexOfFirstIdea, indexOfLastIdea);

    const totalPages = Math.ceil(filteredIdeas.length / ideasPerPage);

    const handleSearch = () => {
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleToggleExpand = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="container">
            <h1>Ideas Table</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for ideas..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Organization</th>
                        <th>Problem Statement Title</th>
                        <th>Category</th>
                        <th>PS Number</th>
                        <th>Submitted Idea(s) Count</th>
                        <th>Theme</th>
                    </tr>
                </thead>
                <tbody>
                    {currentIdeas.map((idea, index) => (
                        <React.Fragment key={idea.id}>
                            <tr>
                                <td>{indexOfFirstIdea + index + 1}</td>
                                <td>{idea.organization}</td>
                                <td>
                                    {expandedRow === idea.id ? (
                                        <span>{idea.title}</span>
                                    ) : (
                                        <span>{idea.title.length > 100 ? `${idea.title.substring(0, 100)}...` : idea.title}</span>
                                    )}
                                    {idea.title.length > 100 && (
                                        <button className="expand-btn" onClick={() => handleToggleExpand(idea.id)}>
                                            {expandedRow === idea.id ? 'Show Less' : 'Read More'}
                                        </button>
                                    )}
                                </td>
                                <td>{idea.category}</td>
                                <td>{idea.psNumber}</td>
                                <td>{idea.submittedIdeasCount}</td>
                                <td>{idea.theme}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default IdeaTable;
