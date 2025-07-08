<?php
/**
 * BusinessContextTest
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
use SpApi\Model\finances\v2024_06_19\BusinessContext;

/**
 * BusinessContextTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the line of business associated with a transaction.
 * @package     SpApi
 */
class BusinessContextTest extends TestCase
{

    private BusinessContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BusinessContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BusinessContext"
     */
    public function testBusinessContext()
    {
        $this->assertInstanceOf(BusinessContext::class, $this->model);
    }

    /**
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $enumInstance = new BusinessContext();
        $allowedValues = $enumInstance->getStoreNameAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }
}
