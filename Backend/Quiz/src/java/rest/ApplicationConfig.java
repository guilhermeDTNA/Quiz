package rest;

import java.util.Set;

/**
 *
 * @author guilherme
 */
//Classe responsável pela criação e configuração do webservice RESTful
@javax.ws.rs.ApplicationPath("")
public class ApplicationConfig extends javax.ws.rs.core.Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method. It is automatically
     * populated with all resources defined in the project. If required, comment
     * out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(rest.CORSFilter.class);
        resources.add(rest.QuizService.class);
    }

}
