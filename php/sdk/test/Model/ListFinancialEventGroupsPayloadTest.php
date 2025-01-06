<?php
/**
 * ListFinancialEventGroupsPayloadTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\financesV0\ListFinancialEventGroupsPayload;

/**
 * ListFinancialEventGroupsPayloadTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the listFinancialEventGroups operation.
 * @package     OpenAPI\Client
 */
class ListFinancialEventGroupsPayloadTest extends TestCase
{

    private ListFinancialEventGroupsPayload $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListFinancialEventGroupsPayload();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListFinancialEventGroupsPayload"
     */
    public function testListFinancialEventGroupsPayload()
    {
        $this->assertInstanceOf(ListFinancialEventGroupsPayload::class, $this->model);
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }

    /**
     * Test attribute "financial_event_group_list"
     */
    public function testPropertyFinancialEventGroupList()
    {
        $testValue = [];
        
        $this->model->setFinancialEventGroupList($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEventGroupList());
    }
}
