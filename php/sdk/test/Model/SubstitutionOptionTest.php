<?php
/**
 * SubstitutionOptionTest
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
use OpenAPI\Client\Model\orders\SubstitutionOption;

/**
 * SubstitutionOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Substitution options for an order item.
 * @package     OpenAPI\Client
 */
class SubstitutionOptionTest extends TestCase
{

    private SubstitutionOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubstitutionOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubstitutionOption"
     */
    public function testSubstitutionOption()
    {
        $this->assertInstanceOf(SubstitutionOption::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "quantity_ordered"
     */
    public function testPropertyQuantityOrdered()
    {
        $testValue = 123;
        
        $this->model->setQuantityOrdered($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityOrdered());
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "measurement"
     */
    public function testPropertyMeasurement()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\Measurement();
        
        $this->model->setMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getMeasurement());
    }
}
