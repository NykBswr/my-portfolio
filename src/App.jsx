import {Routes, Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import {Portfolio, Project, Project_PenilaianKurikulum, Project_SuratMenyurat, Project_Gojek, Project_StrokePrediction, Project_SunriceJeepTour} from './pages'

function App() {
  return (
    <BrowserRouter basename='/my-portfolio'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route exact path='/my-portfolio' element={<Portfolio />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project-penilaian_kurikulum_ftmm' element={<Project_PenilaianKurikulum />} />
        <Route path='/project-surat_menyurat_ftmm' element={<Project_SuratMenyurat />} />
        <Route path='/project-gojek' element={<Project_Gojek />} />
        <Route path='/project-stroke_prediction' element={<Project_StrokePrediction />} />
        <Route path='/project-sunrise_jeep_tour' element={<Project_SunriceJeepTour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;