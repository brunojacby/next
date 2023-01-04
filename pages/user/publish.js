import { DeleteForever } from '@mui/icons-material'
import { Button, Icon, IconButton, Select, TextField, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { Box, Container, flexbox } from '@mui/system'
import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'


const BoxTema = {
    backgroundColor: 'white',
    marginBottom: 3,
}

const thumbsContainer = {
    display: 'flex',
    flexWrap: 'wrap',         
};

const dropzone = {
    display: 'flex', 
    alignItems: 'center', 
    textAlign: 'center', 
    justifyContent: 'center', 
    width: 200, 
    height: 150, 
    border: '2px dashed black', 
    backgroundColor: 'grey', 
    margin: '0 10px 10px 0',
}

const thumb = {
    width: 200, 
    height: 150, 
    border: '1px solid black', 
    margin: '0 10px 10px 0',      
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    position: 'relative',
}

const mask = {
    display: 'flex',
    width: '100%', 
    height: '100%', 
    textAlign: 'center', 
    justifyContent: 'center', 
    alignItems: 'center',
    
    "&:hover": {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    
}

const trash = {
    color: 'transparent',
    "&:hover": {
        display: 'flex',
        color: 'white',
    },   
}

const mainImage = {
    padding: '6px 10px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
    color: 'white',
}

const Publish = () => {
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
        setFiles([...files, ...newFiles])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    return (
    <TemplateDefault>
        <Container>     
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align='center' color="textPrimary" marginTop={3}>
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align='center' color="textPrimary" marginBottom={2}>
                    Quanto mais detalhado melhor!
                </Typography>                
            </Container>

            <Container maxWidth="md">
                <Box sx={BoxTema}>
                    <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                        Título do Anúncio
                    </Typography>
                    <TextField
                        variant="standard"
                        placeholder="ex.: Bicicleta Aro 18 com garantia"
                        size='small'
                        fullWidth
                    ></TextField>
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                        Categoria
                    </Typography>
                    <Select
                    variant="standard"
                    native
                    value=""
                    fullWidth
                    /*onChange={handleChangeCategory}*/
                    inputProps={{
                        name: 'age',
                    }}
                    >
                        <option value={0}>Selecione</option>
                        <option value={1}>Lazer</option>
                        <option value={2}>Telemóveis e Tablets</option>
                        <option value={3}>Agricultura</option>
                        <option value={4}>Animais</option>
                        <option value={5}>Desporto</option>

                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Box sx={BoxTema}>
                    <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                        Imagens
                    </Typography>
                    <Typography component="h8" variant="h8" color="textPrimary" marginBottom={1}>
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                    <Box className={'thumbsContainer'} sx={thumbsContainer}>
                        <Box  className={'dropzone'} sx={dropzone}>
                        <Typography variant='body2' color={'textPrimary'} className={dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            Clique para adicionar ou arraste a imagem para aqui.
                        </Typography>
                        </Box>
                        {
                            files.map((file, index) => (
                                <Box 
                                key={file.name}
                                className={'thumb'} style={{ backgroundImage: `url(${file.preview})`}} sx={thumb}
                                >
                                    {
                                        index === 0 ?
                                        <Box sx={mainImage}>
                                        <Typography variant='body2'>Principal</Typography>
                                        </Box>
                                        : null
                                    }                                    
                                    <Box className={'mask'} sx={mask}>
                                        <IconButton sx={trash} onClick={() => handleRemoveFile(file.name)}>
                                            <DeleteForever fontSize='large'/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            ))
                        }
                       
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Box sx={BoxTema}>
                    <Typography component="h6" variant="h6" color="textPrimary" marginBottom={1}>
                        Descriçao
                    </Typography>
                    <Typography component="h8" variant="h8" color="textPrimary" marginBottom={1}>
                        Escreva os detalhes do que está vendendo.
                    </Typography>
                    <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    >
                    </TextField>
                </Box>
            </Container>  

            <Container maxWidth="md">
                <Box sx={BoxTema}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField
                    label="Nome"
                    variant="outlined"
                    size='small'
                    fullWidth
                    />
                    <br /><br />
                    <TextField
                    label="E-mail"
                    variant="outlined"
                    size='small'
                    fullWidth
                    />
                    <br /><br />
                    <TextField
                    label="Telefone"
                    variant="outlined"
                    size='small'
                    fullWidth
                    />
                </Box>
            </Container>

            <Container>
                <Box textAlign="center">
                    <Button variant='contained' color='primary'>Publicar anúncio</Button>
                </Box>
            </Container>
        </Container>       
    </TemplateDefault>
    )
}

export default Publish