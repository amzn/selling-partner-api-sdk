<?php
/**
 * SubstitutionOptionTest
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
use SpApi\Model\orders\v0\SubstitutionOption;

/**
 * SubstitutionOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Substitution options for an order item.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\orders\v0\Measurement();
        
        $this->model->setMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getMeasurement());
    }
}
