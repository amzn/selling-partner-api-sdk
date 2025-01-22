<?php
/**
 * GetAttributesResponseBuyerTest
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
use OpenAPI\Client\Model\messaging\GetAttributesResponseBuyer;

/**
 * GetAttributesResponseBuyerTest Class Doc Comment
 *
 * @category    Class
 * @description The list of attributes related to the buyer.
 * @package     OpenAPI\Client
 */
class GetAttributesResponseBuyerTest extends TestCase
{

    private GetAttributesResponseBuyer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAttributesResponseBuyer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAttributesResponseBuyer"
     */
    public function testGetAttributesResponseBuyer()
    {
        $this->assertInstanceOf(GetAttributesResponseBuyer::class, $this->model);
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }
}
