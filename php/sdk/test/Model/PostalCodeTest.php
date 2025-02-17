<?php
/**
 * PostalCodeTest
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
use SpApi\Model\pricing\v2022_05_01\PostalCode;

/**
 * PostalCodeTest Class Doc Comment
 *
 * @category    Class
 * @description Postal code value with country code
 * @package     SpApi
 */
class PostalCodeTest extends TestCase
{

    private PostalCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostalCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostalCode"
     */
    public function testPostalCode()
    {
        $this->assertInstanceOf(PostalCode::class, $this->model);
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
