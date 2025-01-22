<?php
/**
 * StandardCompanyLogoModuleTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule;

/**
 * StandardCompanyLogoModuleTest Class Doc Comment
 *
 * @category    Class
 * @description The standard company logo image.
 * @package     OpenAPI\Client
 */
class StandardCompanyLogoModuleTest extends TestCase
{

    private StandardCompanyLogoModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardCompanyLogoModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardCompanyLogoModule"
     */
    public function testStandardCompanyLogoModule()
    {
        $this->assertInstanceOf(StandardCompanyLogoModule::class, $this->model);
    }

    /**
     * Test attribute "company_logo"
     */
    public function testPropertyCompanyLogo()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ImageComponent();
        
        $this->model->setCompanyLogo($testValue);
        $this->assertEquals($testValue, $this->model->getCompanyLogo());
    }
}
