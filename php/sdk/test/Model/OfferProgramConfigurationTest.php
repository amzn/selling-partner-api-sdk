<?php
/**
 * OfferProgramConfigurationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\OfferProgramConfiguration;

/**
 * OfferProgramConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The offer program configuration contains a set of program properties for an offer.
 * @package     SpApi
 */
class OfferProgramConfigurationTest extends TestCase
{

    private OfferProgramConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferProgramConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferProgramConfiguration"
     */
    public function testOfferProgramConfiguration()
    {
        $this->assertInstanceOf(OfferProgramConfiguration::class, $this->model);
    }

    /**
     * Test attribute "preferences"
     */
    public function testPropertyPreferences()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPreferences();
        
        $this->model->setPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getPreferences());
    }

    /**
     * Test attribute "promotions"
     */
    public function testPropertyPromotions()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotions();
        
        $this->model->setPromotions($testValue);
        $this->assertEquals($testValue, $this->model->getPromotions());
    }

    /**
     * Test attribute "enrollment_method"
     */
    public function testPropertyEnrollmentMethod()
    {
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\EnrollmentMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setEnrollmentMethod($testValue);
        $this->assertEquals($testValue, $this->model->getEnrollmentMethod());
    }
}
