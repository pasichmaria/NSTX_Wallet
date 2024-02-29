import {Grid, TablePagination } from "@mui/material";

interface TableProps {
	page: number;
	rowsPerPage: number;
	onPageChange: (event: any, newPage: number) => void;
	onRowsPerPageChange: (event: any) => void;
	totalCount: number;
}
export const CustomTablePagination = ({
	page,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
	totalCount } : TableProps ) => {
	return (
		<Grid container justifyContent="center" sx={{ mt: 4 }}>
			<TablePagination
				component="div"
				count={totalCount}
				page={page}
				onPageChange={onPageChange}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={onRowsPerPageChange}
			/>
		</Grid>
	);
};
