import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} ` : 'Working Papers'}</title>
				{description && (
					<meta name="description" content={description} />
				)}
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: 'Working Papers',
	description: 'Accountacy accounts preparation working papers',
	keywords: 'accounts, schedules, summary',
};

export default Layout;
