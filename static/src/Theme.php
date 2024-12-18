<?php

declare(strict_types=1);

namespace Aikeedo\Starter;

use Easy\Router\Mapper\AttributeMapper;
use Plugin\Domain\Context;
use Plugin\Domain\PluginInterface;

/**
 * Theme class serves as the entry point for the Aikeedo starter theme.
 * 
 * This class implements the PluginInterface and is responsible for initializing
 * and configuring the theme's functionality within the Aikeedo platform.
 * 
 * Note: This class is only required if it's specified in the composer.json's 
 * "extra.entry-class" configuration. When specified, it becomes the main entry 
 * point that gets instantiated when the theme is loaded.
 */
class Theme implements PluginInterface
{
    /**
     * Constructor for the Theme class.
     * 
     * The constructor allows for dependency injection of required services.
     * In this example, we're injecting the AttributeMapper to register new 
     * routes that will map incoming requests to their respective handler 
     * classes (like view classes).
     *
     * @param AttributeMapper $mapper The router attribute mapper used for 
     * registering routes and mapping them to request handlers
     */
    public function __construct(
        private AttributeMapper $mapper
    ) {}

    /**
     * Boots the theme and initializes its core functionality.
     * 
     * This method is called by the Aikeedo platform when the theme is being 
     * initialized. It sets up the necessary configurations, including 
     * registering the theme's directory with the router mapper for 
     * attribute-based routing.
     *
     * @param Context $context The context object providing access to platform 
     * services and state
     * @return void
     */
    public function boot(Context $context): void
    {
        /**
         * Add path to the router mapper for scanning request handlers.
         * This allows the Aikeedo platform to discover classes that implement 
         * RequestHandlerInterface and have the Route attribute. 
         * 
         * Note: Route scanning is cached, so when caching is enabled, new routes 
         * won't be discovered until cache is cleared.
         */
        $this->mapper->addPath(__DIR__);
    }
}
