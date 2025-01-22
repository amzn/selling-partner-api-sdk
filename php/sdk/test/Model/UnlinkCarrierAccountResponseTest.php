<?php
/**
 * UnlinkCarrierAccountResponseTest
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
use OpenAPI\Client\Model\shipping\UnlinkCarrierAccountResponse;

/**
 * UnlinkCarrierAccountResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the UnlinkCarrierAccountResponse operation.
 * @package     OpenAPI\Client
 */
class UnlinkCarrierAccountResponseTest extends TestCase
{

    private UnlinkCarrierAccountResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnlinkCarrierAccountResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnlinkCarrierAccountResponse"
     */
    public function testUnlinkCarrierAccountResponse()
    {
        $this->assertInstanceOf(UnlinkCarrierAccountResponse::class, $this->model);
    }

    /**
     * Test attribute "is_unlinked"
     */
    public function testPropertyIsUnlinked()
    {
        $testValue = true;
        
        $this->model->setIsUnlinked($testValue);
        $this->assertEquals($testValue, $this->model->getIsUnlinked());
    }
}
