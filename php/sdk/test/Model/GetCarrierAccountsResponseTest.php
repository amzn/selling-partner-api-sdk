<?php
/**
 * GetCarrierAccountsResponseTest
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
use SpApi\Model\shipping\v2\GetCarrierAccountsResponse;

/**
 * GetCarrierAccountsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetCarrierAccountsResponse operation.
 * @package     SpApi
 */
class GetCarrierAccountsResponseTest extends TestCase
{

    private GetCarrierAccountsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCarrierAccountsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCarrierAccountsResponse"
     */
    public function testGetCarrierAccountsResponse()
    {
        $this->assertInstanceOf(GetCarrierAccountsResponse::class, $this->model);
    }

    /**
     * Test attribute "active_accounts"
     */
    public function testPropertyActiveAccounts()
    {
        $testValue = [];
        
        $this->model->setActiveAccounts($testValue);
        $this->assertEquals($testValue, $this->model->getActiveAccounts());
    }
}
