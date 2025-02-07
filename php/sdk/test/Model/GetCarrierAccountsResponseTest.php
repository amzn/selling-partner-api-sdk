<?php
/**
 * GetCarrierAccountsResponseTest
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
use OpenAPI\Client\Model\shipping\v2\GetCarrierAccountsResponse;

/**
 * GetCarrierAccountsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetCarrierAccountsResponse operation.
 * @package     OpenAPI\Client
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
