import  { useState } from "react";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import { FaCopy } from "react-icons/fa";
import { Logo } from "../assets";

interface CardBalanceProps {
    id?: string;
    value?: number;
    currency?: string;
    onClick?: () => void;
}

export const CardInfoBalance = ({
                                    id,
                                    value,
                                    currency,
                                    onClick,
                                }: CardBalanceProps) => {
    const [_copied, setCopied] = useState(false);

    const formatBalanceId = (id: string) => {
        return id
            ?.toUpperCase()
            .match(/.{1,4}/g)
            ?.join(" ");
    };

    const handleCopy = () => {
      if (id) {
        navigator.clipboard.writeText(id);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <Card
        sx={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          transition: "transform 0.2s",
          padding: "16px",
          backgroundColor: "rgba(54,108,227,0.4)",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "rgba(54,108,227,0.6)",
            cursor: "pointer"
          }
        }}
        onClick={onClick}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Box display="flex" alignItems="center">
              <Box flexShrink={0}>
                <Logo />
              </Box>
              <Box ml={2}>
                <Typography variant="body1" align="left">
                  Balance ID
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      mr: 1
                    }}
                  >
                    {formatBalanceId(id || "")}
                  </Typography>
                  <IconButton onClick={handleCopy} size="small">
                    <FaCopy fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{
                  fontSize: "12px"
                }}
              >
                Balance
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  letterSpacing: "0.1em"
                }}
              >
                {value} {currency}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
};
