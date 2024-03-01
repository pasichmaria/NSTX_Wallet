import {Grid, TablePagination} from "@mui/material";
import React from "react";

interface TableProps {
	page: number;
	rowsPerPage: number;
	onPageChange: (event: unknown, newPage: number) => void;
	onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	count: number;
}
export const CustomTablePagination = ({
	page,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange, count
									  }: TableProps) => {
	return (
		<Grid container justifyContent="center" sx={{ mt: 4 }}>
			<TablePagination
				component="div"
				count={count || 0}
				page={page}
				onPageChange={onPageChange}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={onRowsPerPageChange}
			/>
		</Grid>
	);
};



