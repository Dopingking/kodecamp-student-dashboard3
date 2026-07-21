import styled, { ThemeProvider } from "styled-components";
import { useStudents } from "../context/StudentContext";
import { theme } from "../styles/theme";

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
`;

const Header = () => {
  const { students } = useStudents();

  const average =
    students.length === 0
      ? 0
      : (
          students.reduce((sum, s) => sum + s.score, 0) /
          students.length
        ).toFixed(1);

  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <Title>KodeCamp 6.0 — Enrollment Portal</Title>

        <Stats>
          <StatCard>
            👨‍🎓 Students: {students.length}
          </StatCard>

          <StatCard>
            📊 Average Score: {average}%
          </StatCard>
        </Stats>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;