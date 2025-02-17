<?php
/**
 * PrimeInformationTypeTest
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
use SpApi\Model\pricing\v0\PrimeInformationType;

/**
 * PrimeInformationTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Amazon Prime information.
 * @package     SpApi
 */
class PrimeInformationTypeTest extends TestCase
{

    private PrimeInformationType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrimeInformationType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrimeInformationType"
     */
    public function testPrimeInformationType()
    {
        $this->assertInstanceOf(PrimeInformationType::class, $this->model);
    }

    /**
     * Test attribute "is_prime"
     */
    public function testPropertyIsPrime()
    {
        $testValue = true;
        
        $this->model->setIsPrime($testValue);
        $this->assertEquals($testValue, $this->model->getIsPrime());
    }

    /**
     * Test attribute "is_national_prime"
     */
    public function testPropertyIsNationalPrime()
    {
        $testValue = true;
        
        $this->model->setIsNationalPrime($testValue);
        $this->assertEquals($testValue, $this->model->getIsNationalPrime());
    }
}
